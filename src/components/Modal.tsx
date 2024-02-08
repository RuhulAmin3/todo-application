type ModalPropsType = {
  showModal: boolean;
  setShowModal: (isModal: boolean) => void;
  title: string;
  children: React.ReactNode;
};

const Modal = ({
  showModal,
  setShowModal,
  title,
  children,
}: ModalPropsType) => {
  return (
    <>
      {showModal ? (
        <div className="fixed z-50 inset-0 overflow-hidden flex items-center justify-center">
          <div
            className="fixed inset-0 bg-gray-700 opacity-75 transition-opacity"
            onClick={() => setShowModal(false)}
          ></div>

          <div className=" rounded-lg overflow-hidden transform text-white border-2 border-white">
            <div className="bg-[#354259] p-8">
              <h3 className="text-3xl text-white uppercase font-semibold mb-7">
                {title}
              </h3>
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
