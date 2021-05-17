import React from 'react';
import {CommentItem} from "./CommentItem";
import {CommentInterface, FormDataInterface, UserInterface} from "../../../types/types";
import {useFormHandler} from "../../../hooks/useFormHandler";
import {GeneralForm} from "../forms/GeneralForm";
import {useDispatchFunc} from "../../../hooks/useDispatchFunction";
import {addComment} from "../../../store/user/userActions";
import {Col} from "antd";

type CommentManipulatorProps = {
    comments: CommentInterface[]
    formData: FormDataInterface[]
    user: UserInterface
    currentUserId: number
}

export const CommentManipulator: React.FC<CommentManipulatorProps> = (
    {
        comments,
        formData,
        user,
        currentUserId
    }
) => {

    const {object, changeHandler} = useFormHandler({
        text: '',
        to: currentUserId,
        user: [user]
    });

    const onSubmit = useDispatchFunc(addComment);

    return (
        <Col
        className ="p-3 mx-auto"
            span={24}>
            {comments.map(comment => (
                <CommentItem
                    avatar={comment.user[0].avatar}
                    userName={comment.user[0].name}
                    userId={comment.user[0].id}
                    text={comment.text}
                />)
            )}
            <GeneralForm
                buttonText="Залишити відгук"
                formData={formData}
                inputHandler={changeHandler}
                submitHandler={onSubmit(object)}
                hasSelector={false}
                hasCheckbox={false}
                hasUploader={false}
            />
        </Col>
    )
}