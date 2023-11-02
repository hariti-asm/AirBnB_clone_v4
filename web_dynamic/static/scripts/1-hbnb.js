$(document).ready(function() {
    // Dictionary of Amenities
    var selectedAmenities = {};
  
    
    function updateAmenities() {
      var selectedAmenitiesText = Object.values(selectedAmenities).join(', ');
      $('div.Amenities h4').text(selectedAmenitiesText);
    }
  
    // Checkbox event handler
    $('input[type="checkbox"]').change(function() {
      var amenityId = $(this).data('id');
      var amenityName = $(this).data('name');
  
      if (this.checked) {
        
        selectedAmenities[amenityId] = amenityName;
      } else {
        
        delete selectedAmenities[amenityId];
      }
  
      
      updateAmenities();
    });
  });
  