import { useSelector, useDispatch } from "react-redux";

export default function GaragePageIndexComp() {
	const user = useSelector((state) => state.user);
	return (
		<>
			<div className=" empty div bg-[#141B29] min-h-16"> </div>
			<p>wellcome to {user.name}'s garage</p>
		</>
	);
}
