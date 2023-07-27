import { useState } from "react";
import AddRoomForm from "../../components/Forms/AddRoomForm";

const AddRoom = () => {
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')

    const handleSubmit = event => {
        event.preventDefault();        
        setLoading(true);
        const location = event.target.location.value;
        const title = event.target.title.value;
        const from = dates.startDate;
        const to = dates.endDate;
        const category = event.target.category.value;
        const price = event.target.price.value;
        const bedrooms = event.target.bedrooms.value;
        const totalGuest = event.target.total_guest.value;
        const bathrooms = event.target.bathrooms.value;
        const description = event.target.description.value;
        
        const image = event.target.image.files[0];
        console.log('submit handle is clicked', location, title, category, price, image, bedrooms, bathrooms, totalGuest, description)
    }

    // handle image upload text change
    const handleImageUploadButtonText = image => {
        setUploadButtonText(image.name.slice(0, 20));
    }

    return (
        <AddRoomForm
            handleSubmit={handleSubmit}
            loading={loading}
            uploadButtonText={uploadButtonText}
            handleImageUploadButtonText={handleImageUploadButtonText}
        />
    );
};

export default AddRoom;