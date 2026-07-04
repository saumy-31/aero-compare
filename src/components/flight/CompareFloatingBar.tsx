import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, X } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

export const CompareFloatingBar = () => {
  const navigate = useNavigate();

  const {
    compareList,
    clearCompareList
  } = useAppStore();

  return (
    <AnimatePresence>
      {compareList.length > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full px-6 py-3 shadow-2xl"
        >
          <Scale className="w-5 h-5 mr-3" />

          <span className="font-bold mr-6">
            {compareList.length} flights selected
          </span>

          <button
            onClick={() => navigate('/compare')}
            className="bg-brand-500 text-white px-5 py-1.5 rounded-full text-sm font-bold hover:bg-brand-600 transition mr-3"
          >
            Compare
          </button>

          <button
            onClick={clearCompareList}
            className="p-1 text-gray-400 hover:text-white dark:hover:text-gray-900 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};