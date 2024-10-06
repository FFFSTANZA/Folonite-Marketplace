import { supabase } from '../utils/supabase.js';

// Create a new template
export async function createTemplate(req, res, next) {
  const { name, version, description, code } = req.body;
  const { data, error } = await supabase
    .from('templates')
    .insert([{ name, version, description, code }]);

  if (error) return next(error);
  res.status(201).json(data);
}

// Get all templates
export async function getAllTemplates(req, res, next) {
  const { data, error } = await supabase.from('templates').select('*');
  if (error) return next(error);
  res.status(200).json(data);
}

// Get a template by ID
export async function getTemplateById(req, res, next) {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('templates')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return next(error);
  res.status(200).json(data);
}

// Update a template
export async function updateTemplate(req, res, next) {
  const { id } = req.params;
  const { name, version, description, code } = req.body;
  const { data, error } = await supabase
    .from('templates')
    .update({ name, version, description, code })
    .eq('id', id);

  if (error) return next(error);
  res.status(200).json(data);
}

// Delete a template
export async function deleteTemplate(req, res, next) {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('templates')
    .delete()
    .eq('id', id);

  if (error) return next(error);
  res.status(200).json({ message: `Template ${id} deleted successfully` });
}
