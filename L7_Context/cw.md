debug
useContext

memo
useMemo https://blog.logrocket.com/rethinking-hooks-memoization/ статьи предостережения
useCallback https://kentcdodds.com/blog/usememo-and-usecallback
useRef применение
useReducer (знакомство)

немного про оптимизации
используя контекст на прямую внутри App внутри App оказывалась и его актуальное состояние. Которое должно меняться и -> перерисовывать всех его детей. По простому - постоянно перерисовывается всё что без memo.
оказалось что это не касается св-ва children.
на примере

v1
<App>
<Parent>
<Child/>
</Parent>
</App>

v2
<App>
<Parent>
<Child/>
</App>

в первом случае при изменении App Child не обновиться
во втором - обновиться

в контексте контекста. Размещая его в отдельном компоненте на подобии <Provider> при измении его стейта, никто из попавших в него через children элементов не перерисуется (без явного подписавшихся)

вывод - выносите контекст и провайдер в отдельный компонент обертку
