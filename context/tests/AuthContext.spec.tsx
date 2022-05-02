import { render } from "@testing-library/react-native";
import { Button, View } from "react-native";
import { AuthProvider, useAuth } from "../AuthContext";

describe("AuthContext", () => {
  it("expects an error when used out side a component", () => {
    const withError = () => {
      const { signOut } = useAuth();
      return signOut();
    };

    expect(withError).toThrow("useAuth must be used inside AuthProvider");
  });

  it("throws an error when used with no provider", () => {
    const WithError = () => {
      const { signOut } = useAuth();
      return (
        <View>
          <Button title="signOut" onPress={signOut} />
        </View>
      );
    };

    expect(() => render(<WithError />)).toThrow(
      "useAuth must be used inside AuthProvider"
    );
  });

  it("renders correctly when used with AuthProvider", () => {
    const WithoutError = () => {
      const { signOut } = useAuth();
      return (
        <View>
          <Button title="signOut" onPress={signOut} />
        </View>
      );
    };
    expect(() =>
      render(
        <AuthProvider>
          <WithoutError />
        </AuthProvider>
      )
    ).toBeDefined();
  });
});
