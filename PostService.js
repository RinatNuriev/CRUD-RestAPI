class PostService {
    async create(req, res) {
        const { author, title, content, picture } = req.body
        console.log(req.files);
        connection.query(sql, [author, title, content, picture])
            .then(result => res.json(result))
            .catch(err => res.status(500).json(err))
    }

    async getAll(req, res) {
        const sqlGetAll = 'SELECT * FROM users'
        connection.query(sqlGetAll)
            .then(result => res.json(result[0]))
            .catch(err => res.status(500).json(err))
    }

    async getOnce(req, res) {
        const { id } = req.params
        if (!id) {
            res.status(400).json({ message: 'id not specified' })
        }
        const sqlGet = `SELECT * FROM users WHERE id = ${id}`
        connection.query(sqlGet)
            .then(result => res.json(result[0]))
            .catch(err => res.status(500).json(err))
    }

    async update(req, res) {
        const post = req.body
        if (!post) {
            res.status(400).json({ message: 'id not specified' })
        }
        const { id } = req.params
        const { author, title, content, picture } = req.body
        const sqlPut = `UPDATE users SET author = '${author}', title = '${title}', content = '${content}', picture = '${picture}' WHERE id = ${id}`
        connection.query(sqlPut)
            .then(result => res.json(result))
            .catch(err => res.status(500).json(err))
    }

    async delete(req, res) {
        const { id } = req.params
        if (!id) {
            res.status(400).json({ message: 'id not specified' })
        }
        const sqlDel = `DELETE FROM users WHERE id = ${id}`
        connection.query(sqlDel)
            .then(result => res.json(result))
            .catch(err => res.status(500).json(err))
    }
}

export default new PostService();