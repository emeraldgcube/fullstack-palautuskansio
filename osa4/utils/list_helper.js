const dummy = (blogs) => {
    return 1
  }

const totalLikes = (blogs) => {
    const reducer = (sum, item) => {
        return sum + item.likes
    }
    if (blogs.length > 0 ) {
    return blogs.reduce(reducer, 0)
}
    return 0
}
const favoriteBlog = (blogs) => {
    if (blogs.length === 0) {return ""}
    const MostLikesAmount = Math.max.apply(Math, blogs.map((o) => { return o.likes; }))
    const favorite = blogs.filter(blog => {
        return blog.likes === MostLikesAmount
    })[0]
    return {"title": favorite.title,
    "author": favorite.author,
    "likes": favorite.likes
    }
}

  
  module.exports = {
    dummy, totalLikes, favoriteBlog
  }