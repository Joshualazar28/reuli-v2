import React, { useState } from 'react';
import ReadMoreReact from 'read-more-react';
import moment  from 'moment';
function OrdersTableItem(props) {

  const [descriptionOpen, setDescriptionOpen] = useState(false);

  const statusColor = (status) => {
    switch (status) {
      case 'payment unsuccessful':
        return 'bg-emerald-100 text-emerald-600';
      case 'Refunded':
        return 'bg-amber-100 text-amber-600';
      default:
        return 'bg-slate-100 text-slate-500';
    }
  };

  const typeIcon = (type) => {
    switch (type) {
      case 'Subscription':
        return (
          <svg className="w-4 h-4 fill-current text-slate-400 shrink-0 mr-2" viewBox="0 0 16 16">
            <path d="M4.3 4.5c1.9-1.9 5.1-1.9 7 0 .7.7 1.2 1.7 1.4 2.7l2-.3c-.2-1.5-.9-2.8-1.9-3.8C10.1.4 5.7.4 2.9 3.1L.7.9 0 7.3l6.4-.7-2.1-2.1zM15.6 8.7l-6.4.7 2.1 2.1c-1.9 1.9-5.1 1.9-7 0-.7-.7-1.2-1.7-1.4-2.7l-2 .3c.2 1.5.9 2.8 1.9 3.8 1.4 1.4 3.1 2 4.9 2 1.8 0 3.6-.7 4.9-2l2.2 2.2.8-6.4z" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 fill-current text-slate-400 shrink-0 mr-2" viewBox="0 0 16 16">
            <path d="M11.4 0L10 1.4l2 2H8.4c-2.8 0-5 2.2-5 5V12l-2-2L0 11.4l3.7 3.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l3.7-3.7L7.4 10l-2 2V8.4c0-1.7 1.3-3 3-3H12l-2 2 1.4 1.4 3.7-3.7c.4-.4.4-1 0-1.4L11.4 0z" />
          </svg>
        );
    }
  };

  return (
    <tbody className="text-sm">
      {/* Row */}
      <tr>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
          <div className="flex items-center">
            <label className="inline-flex">
              <span className="sr-only">Select</span>
              <input id={props.id} className="form-checkbox" type="checkbox" onChange={props.handleClick} checked={props.isChecked} />
            </label>
          </div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="flex items-center text-slate-800">
            {/* <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-100 rounded-full mr-2 sm:mr-3">
              <img className="ml-1" src={props.image} width="20" height="20" alt={props.order} />
            </div> */}
            <div className="font-medium text-sky-500">{props.OrderNumber}</div>
          </div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-medium text-slate-800">  
          {/* <ReadMoreReact text={props?.id}
            min={5}
            ideal={40}
            max={40}
            readMoreText={"read more"}/> */}
          <div className="text-left">{props.id}</div>

             </div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left">{props.FullName}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div> <ReadMoreReact text={props?.AddressLine}
            min={20}
            ideal={40}
            max={40}
            readMoreText={"read more"}/> </div>
        </td>
     
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left font-medium text-emerald-500">{props.RestaurantName}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-center">{moment(props.placeTime).format('h:mm a, MMMM-Do')}</div>
        </td>
      
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className={`inline-flex font-medium rounded-full  text-white bg-indigo-600 px-2.5 py-0.5`}>€ {props.ItemSubTotal}</div>
        </td>
      
        {/* <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="flex items-center">
            {typeIcon(props.type)}
            <div>{props.type}</div>
          </div>
        </td> */}
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
          <div className="flex items-center">
          Open order
          </div>
        </td>
      </tr>
      {/*
      Example of content revealing when clicking the button on the right side:
      Note that you must set a "colSpan" attribute on the <td> element,
      and it should match the number of columns in your table
      */}
      <tr id={`description-${props.id}`} role="region" className={`${!descriptionOpen && 'hidden'}`}>
        <td colSpan="10" className="px-2 first:pl-5 last:pr-5 py-3">
          <div className="flex items-center bg-slate-50 p-3 -mt-3">
            <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2">
              <path d="M1 16h3c.3 0 .5-.1.7-.3l11-11c.4-.4.4-1 0-1.4l-3-3c-.4-.4-1-.4-1.4 0l-11 11c-.2.2-.3.4-.3.7v3c0 .6.4 1 1 1zm1-3.6l10-10L13.6 4l-10 10H2v-1.6z" />
            </svg>
            <div className="italic">{props.description}</div>
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default OrdersTableItem;
