'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { FaPlus, FaMinus, FaSave, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

type Category = {
  id: number;
  name: string;
  slug: string;
};

export default function AddHerbPage() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    scientific_name: '',
    slug: '',
    description: '',
    benefits: [''],
    dosage: {
      powder: '',
      capsule: '',
      tincture: '',
      tea: ''
    },
    warnings: [''],
    history: '',
    cultural_background: '',
    preparation: '',
    image_url: '',
    selectedCategories: [] as number[]
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from('categories')
          .select('id, name, slug')
          .order('name');
        
        if (error) throw error;
        setCategories(data || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'name' && !formData.slug) {
      // Auto-generate slug from name
      const slug = value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      setFormData(prev => ({ ...prev, [name]: value, slug }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDosageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      dosage: {
        ...prev.dosage,
        [name]: value
      }
    }));
  };

  const handleArrayChange = (index: number, value: string, field: 'benefits' | 'warnings') => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const addArrayItem = (field: 'benefits' | 'warnings') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (index: number, field: 'benefits' | 'warnings') => {
    if (formData[field].length > 1) {
      const newArray = [...formData[field]];
      newArray.splice(index, 1);
      setFormData(prev => ({ ...prev, [field]: newArray }));
    }
  };

  const handleCategoryToggle = (categoryId: number) => {
    setFormData(prev => {
      const selectedCategories = [...prev.selectedCategories];
      if (selectedCategories.includes(categoryId)) {
        return {
          ...prev,
          selectedCategories: selectedCategories.filter(id => id !== categoryId)
        };
      } else {
        return {
          ...prev,
          selectedCategories: [...selectedCategories, categoryId]
        };
      }
    });
  };

  const validateForm = () => {
    if (!formData.name) return 'Herb name is required';
    if (!formData.slug) return 'Slug is required';
    if (!formData.description) return 'Description is required';
    if (formData.selectedCategories.length === 0) return 'Please select at least one category';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // Filter out empty array items
      const benefits = formData.benefits.filter(item => item.trim() !== '');
      const warnings = formData.warnings.filter(item => item.trim() !== '');
      
      // Insert herb
      const { data: herbData, error: herbError } = await supabase
        .from('herbs')
        .insert({
          name: formData.name,
          scientific_name: formData.scientific_name,
          slug: formData.slug,
          description: formData.description,
          benefits,
          dosage: formData.dosage,
          warnings,
          history: formData.history,
          cultural_background: formData.cultural_background,
          preparation: formData.preparation,
          image_url: formData.image_url,
        })
        .select('id')
        .single();
      
      if (herbError) throw herbError;
      
      // Insert herb-category relationships
      if (formData.selectedCategories.length > 0 && herbData) {
        const herbCategoryRelations = formData.selectedCategories.map(categoryId => ({
          herb_id: herbData.id,
          category_id: categoryId
        }));
        
        const { error: relationError } = await supabase
          .from('herb_categories')
          .insert(herbCategoryRelations);
        
        if (relationError) throw relationError;
      }
      
      setSuccess(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        scientific_name: '',
        slug: '',
        description: '',
        benefits: [''],
        dosage: {
          powder: '',
          capsule: '',
          tincture: '',
          tea: ''
        },
        warnings: [''],
        history: '',
        cultural_background: '',
        preparation: '',
        image_url: '',
        selectedCategories: []
      });
      
      // Redirect to herbs page after a short delay
      setTimeout(() => {
        router.push('/herbs');
      }, 2000);
      
    } catch (error: any) {
      console.error('Error adding herb:', error);
      setError(error.message || 'An error occurred while adding the herb');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/admin" className="text-primary-600 dark:text-primary-400 inline-flex items-center mb-6 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Admin Dashboard
        </Link>
        
        <h1 className="text-3xl font-serif font-bold mb-6">Add New Herb</h1>
        
        {success && (
          <div className="bg-green-100 dark:bg-green-900/20 border-l-4 border-green-500 text-green-700 dark:text-green-300 p-4 mb-6" role="alert">
            <p className="font-bold">Success!</p>
            <p>The herb has been added successfully. Redirecting...</p>
          </div>
        )}
        
        {error && (
          <div className="bg-red-100 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-300 p-4 mb-6" role="alert">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Herb Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white"
              />
            </div>
            
            <div>
              <label htmlFor="scientific_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Scientific Name
              </label>
              <input
                type="text"
                id="scientific_name"
                name="scientific_name"
                value={formData.scientific_name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white"
              />
            </div>
            
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Slug* (URL-friendly name)
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Auto-generated from name. Only lowercase letters, numbers, and hyphens.
              </p>
            </div>
            
            <div>
              <label htmlFor="image_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Image URL
              </label>
              <input
                type="text"
                id="image_url"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description*
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white"
            ></textarea>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Benefits
            </label>
            {formData.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={benefit}
                  onChange={(e) => handleArrayChange(index, e.target.value, 'benefits')}
                  className="flex-grow px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white"
                  placeholder={`Benefit ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem(index, 'benefits')}
                  className="ml-2 text-red-500 hover:text-red-700"
                  title="Remove benefit"
                >
                  <FaMinus />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('benefits')}
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
            >
              <FaPlus className="mr-1" /> Add Benefit
            </button>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Recommended Dosage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="powder" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Powder
                </label>
                <input
                  type="text"
                  id="powder"
                  name="powder"
                  value={formData.dosage.powder}
                  onChange={handleDosageChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white"
                  placeholder="e.g., 1-2 teaspoons daily"
                />
              </div>
              
              <div>
                <label htmlFor="capsule" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Capsule
                </label>
                <input
                  type="text"
                  id="capsule"
                  name="capsule"
                  value={formData.dosage.capsule}
                  onChange={handleDosageChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white"
                  placeholder="e.g., 500mg, 1-2 times daily"
                />
              </div>
              
              <div>
                <label htmlFor="tincture" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Tincture
                </label>
                <input
                  type="text"
                  id="tincture"
                  name="tincture"
                  value={formData.dosage.tincture}
                  onChange={handleDosageChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white"
                  placeholder="e.g., 2-4 ml, 2-3 times daily"
                />
              </div>
              
              <div>
                <label htmlFor="tea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Tea
                </label>
                <input
                  type="text"
                  id="tea"
                  name="tea"
                  value={formData.dosage.tea}
                  onChange={handleDosageChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white"
                  placeholder="e.g., 1 tsp per cup, steep 10 minutes"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Warnings & Precautions
            </label>
            {formData.warnings.map((warning, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={warning}
                  onChange={(e) => handleArrayChange(index, e.target.value, 'warnings')}
                  className="flex-grow px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white"
                  placeholder={`Warning ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem(index, 'warnings')}
                  className="ml-2 text-red-500 hover:text-red-700"
                  title="Remove warning"
                >
                  <FaMinus />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('warnings')}
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
            >
              <FaPlus className="mr-1" /> Add Warning
            </button>
          </div>
          
          <div className="mb-6">
            <label htmlFor="history" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Historical Use
            </label>
            <textarea
              id="history"
              name="history"
              value={formData.history}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white"
              placeholder="Describe the historical use of this herb..."
            ></textarea>
          </div>
          
          <div className="mb-6">
            <label htmlFor="cultural_background" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Cultural Background
            </label>
            <textarea
              id="cultural_background"
              name="cultural_background"
              value={formData.cultural_background}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white"
              placeholder="Describe the cultural significance of this herb..."
            ></textarea>
          </div>
          
          <div className="mb-6">
            <label htmlFor="preparation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Traditional Preparation
            </label>
            <textarea
              id="preparation"
              name="preparation"
              value={formData.preparation}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white"
              placeholder="Describe how this herb is traditionally prepared..."
            ></textarea>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Categories*
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`category-${category.id}`}
                    checked={formData.selectedCategories.includes(category.id)}
                    onChange={() => handleCategoryToggle(category.id)}
                    className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`category-${category.id}`} className="text-gray-700 dark:text-gray-300">
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
            {categories.length === 0 && (
              <p className="text-yellow-600 dark:text-yellow-400 text-sm mt-2">
                No categories found. Please add categories first.
              </p>
            )}
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary inline-flex items-center"
            >
              {loading ? (
                <>
                  <span className="animate-spin mr-2">⟳</span> Saving...
                </>
              ) : (
                <>
                  <FaSave className="mr-2" /> Save Herb
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
