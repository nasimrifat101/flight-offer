
const InputGroup = () => {
    return (
        
        <div className="flex justify-between mb-6">
        <input type="text" defaultValue='LHR' className="border-2 rounded px-4 py-2" />
        <input type="text" defaultValue="CDG" className="border-2 rounded px-4 py-2" />
        <input type="date" defaultValue="2012-12-12" className="border-2 rounded px-4 py-2" />

        <select className="border-2 rounded px-4 py-2">
            <option>Day -</option>
            <option value="1">Day 1</option>
            <option value="2">Day 2</option>
            <option value="3">Day 3</option>
            <option value="4">Day 4</option>
            <option value="5">Day 5</option>
            <option value="6">Day 6</option>
            <option value="7">Day 7</option>
        </select>
        <select className="border-2 rounded px-4 py-2">
            <option>Day +</option>
            <option value="1">Day 1</option>
            <option value="2">Day 2</option>
            <option value="3">Day 3</option>
            <option value="4">Day 4</option>
            <option value="5">Day 5</option>
            <option value="6">Day 6</option>
            <option value="7">Day 7</option>
        </select>
        <select className="border-2 rounded px-4 py-2">
            <option>Any time</option>
            <option value="1">Day 1</option>
            <option value="2">Day 2</option>
            <option value="3">Day 3</option>
            <option value="4">Day 4</option>
            <option value="5">Day 5</option>
            <option value="6">Day 6</option>
            <option value="7">Day 7</option>
        </select>

        <p className="text-3xl">+</p>
        <select className="border-2 rounded px-4 py-2">
            <option>ADT</option>
            <option value="1">Day 1</option>
            <option value="2">Day 2</option>
            <option value="3">Day 3</option>
            <option value="4">Day 4</option>
            <option value="5">Day 5</option>
            <option value="6">Day 6</option>
            <option value="7">Day 7</option>
        </select>
        <select className="border-2 rounded px-4 py-2">
            <option>1</option>

            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
        </select>
        <p className="text-3xl">+</p>

    </div>
    );
};

export default InputGroup;