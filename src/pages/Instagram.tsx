import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Instagram as InstagramIcon, Plus, Heart, MessageCircle } from "lucide-react";
import FileUpload from "@/components/FileUpload";

const Instagram = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      caption: "Building amazing websites for local businesses! 🚀 #WebDevelopment #GromoDigital",
      likes: 45,
      comments: 12,
      date: "2024-01-15"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
      caption: "E-commerce solutions that drive sales 💼 #Ecommerce #GromoDigital",
      likes: 38,
      comments: 8,
      date: "2024-01-12"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400",
      caption: "Mobile-first design approach for better user experience 📱 #MobileFirst #UX",
      likes: 52,
      comments: 15,
      date: "2024-01-10"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
      caption: "Code, coffee, and creativity ☕ #CodingLife #WebDev",
      likes: 67,
      comments: 23,
      date: "2024-01-08"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400",
      caption: "SEO optimization tips for small businesses 📈 #SEO #DigitalMarketing",
      likes: 34,
      comments: 9,
      date: "2024-01-05"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400",
      caption: "Team collaboration makes everything better! 👥 #Teamwork #Startup",
      likes: 41,
      comments: 18,
      date: "2024-01-03"
    }
  ]);

  const [newPost, setNewPost] = useState({
    image: "",
    caption: ""
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddPost = () => {
    if ((newPost.image || uploadedFile) && newPost.caption) {
      const imageUrl = uploadedFile ? URL.createObjectURL(uploadedFile) : newPost.image;
      const post = {
        id: posts.length + 1,
        image: imageUrl,
        caption: newPost.caption,
        likes: 0,
        comments: 0,
        date: new Date().toISOString().split('T')[0]
      };
      setPosts([post, ...posts]);
      setNewPost({ image: "", caption: "" });
      setUploadedFile(null);
      setShowAddForm(false);
    }
  };

  const handleFileSelect = (file: File) => {
    setUploadedFile(file);
    setNewPost({ ...newPost, image: "" }); // Clear URL input when file is selected
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-4">
                <InstagramIcon className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Instagram Posts
            </h1>
            <p className="text-xl text-gray-600">
              Follow our journey as we help businesses grow online
            </p>
          </div>
        </div>
      </section>

      {/* Add Post Button */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
              title="Add new Instagram post"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add New Post
            </Button>
          </div>
        </div>
      </section>

      {/* Add Post Form */}
      {showAddForm && (
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Add New Instagram Post</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Upload Image or Enter URL</Label>
                  <FileUpload
                    onFileSelect={handleFileSelect}
                    currentImage={uploadedFile ? URL.createObjectURL(uploadedFile) : newPost.image}
                    onRemove={handleRemoveFile}
                  />
                  {!uploadedFile && (
                    <div className="mt-2">
                      <input
                        type="url"
                        value={newPost.image}
                        onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
                        placeholder="Or paste image URL here..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <Label htmlFor="caption">Caption</Label>
                  <Textarea
                    id="caption"
                    value={newPost.caption}
                    onChange={(e) => setNewPost({ ...newPost, caption: e.target.value })}
                    placeholder="Write a caption for your post..."
                    rows={3}
                  />
                </div>
                <div className="flex gap-2">
                <Button 
                  onClick={handleAddPost} 
                  className="flex-1"
                  title="Add new Instagram post"
                >
                  Add Post
                </Button>
                  <Button variant="outline" onClick={() => setShowAddForm(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Instagram Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative overflow-hidden group">
                  <img
                    src={post.image}
                    alt="Instagram post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-white text-center">
                      <div className="flex items-center justify-center space-x-4">
                        <div className="flex items-center">
                          <Heart className="h-6 w-6 mr-1" />
                          <span className="font-semibold">{post.likes}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-6 w-6 mr-1" />
                          <span className="font-semibold">{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                  <p className="text-gray-900 line-clamp-3">{post.caption}</p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {post.comments}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Us CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <InstagramIcon className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Follow Us on Instagram</h2>
            <p className="text-xl mb-8 opacity-90">
              Stay updated with our latest projects and behind-the-scenes content
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              <a 
                href="https://instagram.com/gromo_link" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Follow us on Instagram"
              >
                @gromo_link
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instagram;