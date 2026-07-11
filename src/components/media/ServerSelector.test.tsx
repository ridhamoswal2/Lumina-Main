import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ServerSelector from "./ServerSelector";

describe("ServerSelector", () => {
  it("adds Cinezo as the second server and uses its embed URL for movies", async () => {
    const user = userEvent.setup();
    const onServerSelect = vi.fn();
    const onClose = vi.fn();

    render(
      <ServerSelector
        isOpen
        onClose={onClose}
        onServerSelect={onServerSelect}
        item={{ id: 1339713, title: "Test Movie" }}
        mediaType="movie"
      />
    );

    await user.click(screen.getByRole("button", { name: /Cinezo/i }));

    expect(onServerSelect).toHaveBeenCalledWith(
      "https://player.cinezo.live/embed/movie/1339713"
    );
    expect(onClose).toHaveBeenCalled();
  });
});
