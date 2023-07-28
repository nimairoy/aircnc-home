import { useContext, useState } from "react";
import AddRoomForm from "../../components/Forms/AddRoomForm";
import { imageUpload } from "../../api/utils";
import { AuthContext } from "../../providers/AuthProvider";
import { addRoom } from "../../api/rooms";

const AddRoom = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const location = event.target.location.value;
    const title = event.target.title.value;
    const from = dates.startDate;
    const to = dates.endDate;
    const category = event.target.category.value;
    const price = event.target.price.value;
    const bedrooms = event.target.bedrooms.value;
    const total_guest = event.target.total_guest.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const image = event.target.image.files[0];

    // Upload Image
    imageUpload(image)
      .then((data) => {
        const roomData = {
          location,
          title,
          from,
          to,
          price: parseFloat(price),
          total_guest,
          bedrooms,
          bathrooms,
          description,
          image: data.data.display_url,
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
          category,
        };

        // add room data to the server
        addRoom(roomData)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => console.log(err.message));

        setLoading(false);
        console.log(roomData);
      })
      .catch((err) => console.log(err.message));
  };

  // handle image upload text change
  const handleImageUploadButtonText = (image) => {
    setUploadButtonText(image.name.slice(0, 20));
  };

  // handle the calendar ranges
  const handleDates = (ranges) => {
    setDates(ranges.selection);
  };

  return (
    <AddRoomForm
      handleSubmit={handleSubmit}
      loading={loading}
      uploadButtonText={uploadButtonText}
      handleImageUploadButtonText={handleImageUploadButtonText}
      dates={dates}
      handleDates={handleDates}
    />
  );
};

export default AddRoom;
