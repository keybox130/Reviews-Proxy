import React from 'react';
import ReactDOM from 'react-dom';

window.onload = () => {
  ReactDOM.render(<GalleryApp />, document.getElementById('gallery'));
  ReactDOM.render(<BookingApp />, document.getElementById('booking'));
  ReactDOM.render(<ReviewApp />, document.getElementById('reviews'));
  ReactDOM.render(<MorePlacesApp />, document.getElementById('more-places-to-stay'));
}