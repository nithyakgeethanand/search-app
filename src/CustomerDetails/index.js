import React from "react";

const CustomerDetails = ({ data }) => (
  <div style={{
    display: "inline-flex",
    margin: "20px",
    width: "200px",
    padding: "20px",
  }} data-testid="customer-details">
    <div style={{
      'textAlign': 'center',
    }}>
      <div>
        <div style={{
          "backgroundColor": "#D5D3D3",
          'borderCollapse': "collapse",
          "padding": "10px",
          "fontStyle": "20px",
        }} data-testid="customer-name-heading">Customer Name : {data.name}</div>

        <div style={{
          "padding": "10px",
          'textAlign': "center",
          'border': "1px solid #D5D3D3",
        }} data-testid="customer-id">{data.id}</div>
        <div style={{
          "padding": "10px",
          'textAlign': "center",
          'border': "1px solid #D5D3D3",
        }} data-testid="customer-name">{data.name}</div>
        <div style={{
          "padding": "10px",
          'textAlign': "center",
          'border': "1px solid #D5D3D3",
        }} data-testid="customer-nickname">{data.nickname}</div>
        <div style={{
          "padding": "10px",
          'textAlign': "center",
          'border': "1px solid #D5D3D3",
        }} data-testid="customer-address">{data.address}</div>
      </div>

    </div>
  </div>);

export default CustomerDetails;