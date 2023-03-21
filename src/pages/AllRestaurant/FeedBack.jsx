import React from 'react'
import ForumEntries from '../../partials/community/ForumEntries';

const FeedBack = () => {
  return (
    <div>
         <main>
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                <div className="mb-8">
                        <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">FeedBacks ✨</h1>
                    </div>
      <ForumEntries/>
    </div>
    </main>
    </div>
  )
}

export default FeedBack
