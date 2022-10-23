function CommentItem({ comment }) {
  return (
    <div className="w-full">
      {/**/}
      <div className="w-full h-full flex gap-2">
        <div className="h-12 w-12 shrink-0 rounded-full overflow-hidden">
          <img
            src={comment.avatar}
            alt={comment.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-fit h-fit bg-border_dark p-2 rounded-2xl">
          <p className="text-h6 font-bold">{comment.name}</p>
          <p className="text-body-sm">{comment.content}</p>
        </div>
      </div>
    </div>
  )
}

export default CommentItem
