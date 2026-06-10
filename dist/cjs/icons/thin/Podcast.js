var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Podcast_exports = {};
__export(Podcast_exports, {
  default: () => Podcast_default
});
module.exports = __toCommonJS(Podcast_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PodcastThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 312C191.125 312 160 320.625 160 355.75C160 388.875 172.875 460.125 180.625 488.625C185.75 507.625 205.125 512 224 512S262.25 507.625 267.375 488.625C275.125 459.875 288 388.75 288 355.75C288 320.625 256.875 312 224 312ZM251.928 484.457C251.076 487.615 248.814 496 224 496C199.188 496 196.926 487.615 196.064 484.426C188.143 455.289 176 386.051 176 355.75C176 347.445 176 328 224 328S272 347.445 272 355.75C272 385.693 259.854 455.055 251.928 484.457ZM224 280C254.953 280 280 254.953 280 224S254.953 168 224 168S168 193.047 168 224S193.047 280 224 280ZM224 184C246.057 184 264 201.943 264 224S246.057 264 224 264C201.945 264 184 246.057 184 224S201.945 184 224 184ZM224 0C100.5 0 0 100.484 0 224C0 309.656 47.688 386.562 124.438 424.719C128.469 426.703 133.219 425.078 135.156 421.109C137.125 417.156 135.531 412.344 131.562 410.375C60.281 374.969 16 303.547 16 224C16 109.312 109.312 16 224 16S432 109.312 432 224C432 303.547 387.719 374.969 316.438 410.375C312.469 412.344 310.875 417.156 312.844 421.109C314.219 423.922 317.062 425.547 320 425.547C321.188 425.547 322.406 425.281 323.562 424.719C400.312 386.562 448 309.656 448 224C448 100.484 347.5 0 224 0ZM314.688 325.672C316.25 327.219 318.312 328 320.344 328C322.406 328 324.438 327.219 326 325.641C353.094 298.469 368 262.359 368 224C368 144.594 303.406 80 224 80S80 144.594 80 224C80 262.359 94.906 298.469 122 325.641C125.094 328.766 130.156 328.797 133.312 325.672C136.437 322.547 136.437 317.484 133.312 314.359C109.25 290.188 96 258.109 96 224C96 153.422 153.406 96 224 96S352 153.422 352 224C352 258.109 338.75 290.188 314.688 314.359C311.562 317.484 311.562 322.547 314.688 325.672Z" })
  }
));
PodcastThin.displayName = "PodcastThin";
var Podcast_default = PodcastThin;
