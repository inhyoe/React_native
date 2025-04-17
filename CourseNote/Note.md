### useEffect

- SetInterval 같은 코드에 적용하기 좋음
- 컴포넌트가 처음 마운트 될 때 한 번만 실행해야 하는 작업이 있을 때
- 특정 상태나 props가 변경될 때 마다 작업을 수행해야 할 때

컴포넌트가 처음 마운트 될 떄

```js
import { useEffect, useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []); // 빈 배열로 설정하여 마운트 시 한 번만 실행
}
```

✅ 2. 특정 상태나 props가 변경될 때마다 작업을 수행해야 할 때

특정 상태나 props가 변경될 때마다 작업을 수행해야 하는 경우, useEffect의 의존성 배열에 해당 상태나 props를 포함시켜 처리할 수 있습니다.

```js
import { useEffect, useState } from 'react';

function SearchResults({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;
    fetch(`/api/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setResults(data));
  }, [query]); // query가 변경될 때마다 실행
}
```

✅ 3. 컴포넌트가 언마운트되기 전에 정리(clean-up) 작업이 필요할 때

컴포넌트가 언마운트되기 전에 이벤트 리스너 제거, 구독 해제 등 정리 작업이 필요한 경우, useEffect에서 정리 함수를 반환하여 처리할 수 있습니다.

```js
import { useEffect } from 'react';

function WindowResizeLogger() {
  useEffect(() => {
    const handleResize = () => {
      console.log('창 크기 변경됨');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // 정리 작업
    };
  }, []); // 빈 배열로 설정하여 마운트 시 한 번만 실행
}
```
