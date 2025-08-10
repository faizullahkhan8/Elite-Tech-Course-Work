import CreatePost from "./CreatePost";
import Post from "./Post";

export default function Feed() {
    return (
        <div className="flex-1 px-6">
            <CreatePost />
            <Post
                name="John Carter"
                time="4 hours ago"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                likes={1200}
                comments={200}
            />
            <Post
                name="John Carter"
                time="4 hours ago"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                likes={1200}
                comments={200}
            />
        </div>
    );
}
