const express = require('express');
const router = express.Router();
const { Content } = require('../models');

router.post('/', async (req,res)=>{ try{ const { title, slug, body, images, status } = req.body; const c = await Content.create({ title, slug, body, images, status }); res.status(201).json(c); } catch(e){ console.error(e); res.status(500).json({ error:'Could not create' }) } });

router.get('/', async (req,res)=>{ const list = await Content.findAll({ where: { status: 'published' }, order:[['createdAt','DESC']] }); res.json(list); });

router.get('/:slug', async (req,res)=>{ const c = await Content.findOne({ where: { slug: req.params.slug, status: 'published' } }); if(!c) return res.status(404).json({ error:'Not found' }); res.json(c); });

router.put('/:id', async (req,res)=>{ try{ const c = await Content.findByPk(req.params.id); if(!c) return res.status(404).json({ error:'Not found' }); await c.update(req.body); res.json(c); } catch(e){ console.error(e); res.status(500).json({ error:'Could not update' }) } });

router.delete('/:id', async (req,res)=>{ const c = await Content.findByPk(req.params.id); if(!c) return res.status(404).json({ error:'Not found' }); await c.destroy(); res.json({ success:true }); });

module.exports = router;
