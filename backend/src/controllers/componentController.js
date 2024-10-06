import { supabase } from '../utils/supabase.js';

// Create a new component
export async function createComponent(req, res, next) {
  const { name, version, description, code } = req.body;
  const { data, error } = await supabase
    .from('components')
    .insert([{ name, version, description, code }]);

  if (error) return next(error);
  res.status(201).json(data);
}

// Get all components
export async function getAllComponents(req, res, next) {
  const { data, error } = await supabase.from('components').select('*');
  if (error) return next(error);
  res.status(200).json(data);
}

// Get a component by ID
export async function getComponentById(req, res, next) {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('components')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return next(error);
  res.status(200).json(data);
}

// Update a component
export async function updateComponent(req, res, next) {
  const { id } = req.params;
  const { name, version, description, code } = req.body;
  const { data, error } = await supabase
    .from('components')
    .update({ name, version, description, code })
    .eq('id', id);

  if (error) return next(error);
  res.status(200).json(data);
}

// Delete a component
export async function deleteComponent(req, res, next) {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('components')
    .delete()
    .eq('id', id);

  if (error) return next(error);
  res.status(200).json({ message: `Component ${id} deleted successfully` });
}
