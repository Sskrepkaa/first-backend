import Post from "./Post.js";

class PostController {
    async create(req, res) {
        try {
            const {author, title, content, img} = req.body
            const post = await Post.create({author, title, content, img})
            console.log(req.body);
            res.json(post)
           } catch (error) {
            res.status(500).json(error)
           }
    }

    async getAll(req, res) {
        try {
            const posts = await Post.find();
            return res.json(posts);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            if (!id)  res.status(400).json({message: 'no id'});
            const post = await Post.findById(id);
            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async update(req, res) {
        try {
            const post = req.body;
            if (!post._id) res.status(400).json({message: 'no id'});
            const upPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
            return res.json(upPost)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            if (!id)  res.status(400).json({message: 'no id'});
            const post = await Post.findByIdAndDelete(id);
            return res.json(post);
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new PostController();