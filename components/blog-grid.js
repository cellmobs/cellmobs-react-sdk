import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/pro-solid-svg-icons'
import { listPages } from 'redux/actions/pageActions';
import BlogCard  from "./blog-card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BlogyGrid({pages}) {

    const renderCards = () => {
        return pages?.map((s, ix) => {
            if(ix>=0){
                return <BlogCard item={s} key={s.id} />;
            }
        })
    }

    return (
        renderCards()
    )
}

