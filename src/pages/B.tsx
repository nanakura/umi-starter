import { counterState } from "@/models";
import { PageContainer } from "@ant-design/pro-layout";
import { Button, Card, Space } from "antd";
import { useRecoilState } from "recoil";


function B() {
  const [counter, setCounter] = useRecoilState(counterState);
  return (
    <PageContainer>
      <Card>
        <Space>
          {counter}
          <Button onClick={() => setCounter(counter+1)}>+</Button>
        </Space>
      </Card>
    </PageContainer>
  );
}

export default B;
