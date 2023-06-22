/**
 * useLayoutEffect
 * 1. cập nhật lại state
 * 2. cập nhạt DOM (mutated)
 * 3. gọi cleanup nếu deps thay đổi (sync)
 * 4. gọi useLayoutEffect callback (sync)
 * 5. render lại UI
 */
/**
 * useEffect
 * 1. cập nhật lại state
 * 2. cập nhạt DOM (mutated)
 * 5. render lại UI
 * 3. gọi cleanup nếu deps thay đổi 
 * 4. gọi useEffect callback 
 */
import ToggleMain from "./ToggleMain";

export default function UseEffectComponent() {
  return (
    <>
      <ToggleMain />
    </>
  );
}
