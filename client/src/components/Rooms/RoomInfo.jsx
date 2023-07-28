const RoomInfo = ({ roomData }) => {

  const { host, bedrooms, bathrooms, total_guest, description } = roomData;

  return (
    <div className='col-span-4 flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <div
          className='
              text-xl 
              font-semibold 
              flex 
              flex-row 
              items-center
              gap-2
            '
        >
          <div>Hosted by {host.name}</div>

          <img
            className='rounded-full'
            height='30'
            width='30'
            alt='Avatar'
            src={host.image}
          />
        </div>
        <div
          className='
              flex 
              flex-row 
              items-center 
              gap-4 
              font-light
              text-neutral-500
            '
        >
          <div>{total_guest > 1 ? `${total_guest} Guests` : `${total_guest} Guest`} </div>
          <div>{bedrooms > 1 ? `${bedrooms} Bedrooms` : `${bedrooms} Bedroom`} </div>
          <div>{bathrooms > 1 ? `${bathrooms} Bathrooms` : `${bathrooms} Bathroom`}</div>
        </div>
      </div>

      <hr />
      <div
        className='
        text-lg font-light text-neutral-500'
      >
        {description}
      </div>
      <hr />
    </div>
  )
}

export default RoomInfo