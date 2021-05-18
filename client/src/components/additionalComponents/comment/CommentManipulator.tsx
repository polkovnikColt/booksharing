import React from 'react';
import {CommentItem} from "./CommentItem";
import {CommentInterface, FormDataInterface, UserInterface} from "../../../types/types";
import {useFormHandler} from "../../../hooks/useFormHandler";
import {GeneralForm} from "../forms/GeneralForm";
import {useDispatchFunc} from "../../../hooks/useDispatchFunction";
import {addComment, deleteComment} from "../../../store/user/userActions";
import {Col, Row} from "antd";
import {ButtonManipulate} from "../manipulators/ButtonManipulate";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

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
    const currentUser = useSelector((store: RootState) => store.user);

    return (
        <Col
            className="p-3 mx-auto"
            span={24}>
            {comments.map(comment => (
                    <Row>
                        <Col span ={17}>
                        <CommentItem
                            avatar={comment.user[0].avatar}
                            userName={comment.user[0].name}
                            userId={comment.user[0].id}
                            text={comment.text}
                        />
                        </Col>
                        <Col span={5}>
                        {currentUser.credentials.role === 'admin'
                        && <ButtonManipulate
                            dispatchFunction={deleteComment}
                            object={comment}
                            text="Видалити"
                            type="delete"
                        />}
                        </Col>
                    </Row>
                )
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