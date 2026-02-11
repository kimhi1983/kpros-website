import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, PRODUCTS } from '../constants';
import { Product, Category } from '../types';
import { X, ArrowRight, Info } from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProduct]);

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#F5F5F3] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="mb-10 sm:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-800 mb-3 sm:mb-4">Smart Data</h2>
          <p className="text-sm sm:text-base text-slate-500 font-light max-w-xl mx-auto">
            Explore our curated library of high-performance ingredients.
          </p>
        </div>

        <div className="mb-8 sm:mb-12 -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto scrollbar-hide">
          <div className="flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 min-w-max sm:min-w-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border whitespace-nowrap flex-shrink-0 ${
                  activeCategory === cat
                    ? 'bg-slate-800 text-white border-slate-800 shadow-md'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700 active:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100 cursor-pointer hover:shadow-xl active:shadow-md hover:border-slate-200 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-slate-50 rounded-bl-full -mr-3 -mt-3 sm:-mr-4 sm:-mt-4 opacity-50 group-hover:scale-150 transition-transform duration-500 ease-out" />
                
                <div className="relative z-10">
                  <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-100 text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3 sm:mb-4">
                    {product.category}
                  </span>
                  <h3 className="text-base sm:text-xl font-medium text-slate-800 mb-1.5 sm:mb-2 group-hover:text-teal-700 transition-colors leading-snug">
                    {product.item}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 mb-3 sm:mb-4 font-light">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center text-[10px] sm:text-xs text-slate-500 font-semibold mt-auto pt-3 sm:pt-4 border-t border-slate-50">
                    <span className="flex items-center group-hover:translate-x-1 transition-transform">
                      View Spec <ArrowRight size={12} className="ml-1 sm:w-3.5 sm:h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                onClick={() => setSelectedProduct(null)}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full sm:max-w-lg bg-white rounded-t-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] sm:max-h-[85vh] flex flex-col"
              >
                <div className="sm:hidden flex justify-center pt-2 pb-1">
                  <div className="w-10 h-1 bg-slate-200 rounded-full"></div>
                </div>

                <div className="bg-slate-50 px-5 sm:px-6 py-4 sm:py-6 border-b border-slate-100 flex justify-between items-start flex-shrink-0">
                  <div className="min-w-0 pr-4">
                    <span className="text-[10px] sm:text-xs font-bold text-teal-600 uppercase tracking-widest">
                      {selectedProduct.brand || 'KPROS'}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-semibold text-slate-800 mt-0.5 sm:mt-1 truncate">
                      {selectedProduct.item}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="p-1.5 sm:p-2 bg-white rounded-full text-slate-400 hover:text-slate-800 active:bg-slate-100 transition-colors shadow-sm flex-shrink-0"
                  >
                    <X size={18} className="sm:w-5 sm:h-5" />
                  </button>
                </div>

                <div className="p-5 sm:p-8 space-y-4 sm:space-y-6 overflow-y-auto flex-1">
                  <div>
                    <h4 className="flex items-center text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1.5 sm:mb-2">
                      <Info size={13} className="mr-1.5 sm:mr-2" /> Description
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-100">
                    <h4 className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide mb-1.5 sm:mb-2">INCI Name</h4>
                    <p className="text-xs sm:text-sm font-medium text-slate-800 font-mono break-words leading-relaxed">
                      {selectedProduct.inciName}
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                     <button className="w-full sm:flex-1 py-3 bg-slate-800 text-white rounded-xl text-sm font-medium hover:bg-slate-900 active:bg-slate-950 transition-colors">
                        Request Sample
                     </button>
                     <button className="w-full sm:flex-1 py-3 border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 active:bg-slate-100 transition-colors">
                        Download TDS
                     </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Products;
