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
var DrawCircle_exports = {};
__export(DrawCircle_exports, {
  default: () => DrawCircle_default
});
module.exports = __toCommonJS(DrawCircle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrawCircleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 256C512 225.75 490.875 200.5 462.625 193.875C441.75 124.75 387.25 70.25 318.125 49.375C311.5 21.125 286.25 0 256 0S200.5 21.125 193.875 49.375C124.75 70.25 70.25 124.75 49.375 193.875C21.125 200.5 0 225.75 0 256S21.125 311.5 49.375 318.125C70.25 387.25 124.75 441.75 193.875 462.625C200.5 490.875 225.75 512 256 512S311.5 490.875 318.125 462.625C387.25 441.75 441.75 387.25 462.625 318.125C490.875 311.5 512 286.25 512 256ZM448 272C439.125 272 432 264.875 432 256C432 247.125 439.125 240 448 240S464 247.125 464 256C464 264.875 456.875 272 448 272ZM256 48C264.875 48 272 55.125 272 64S264.875 80 256 80C247.125 80 240 72.875 240 64S247.125 48 256 48ZM64 240C72.875 240 80 247.125 80 256C80 264.875 72.875 272 64 272S48 264.875 48 256C48 247.125 55.125 240 64 240ZM256 464C247.125 464 240 456.875 240 448S247.125 432 256 432C264.875 432 272 439.125 272 448S264.875 464 256 464ZM309.875 413.75C298.5 395.875 278.75 384 256 384S213.5 395.875 202.125 413.75C153.25 397 115 358.75 98.25 309.875C116.125 298.5 128 278.75 128 256S116.125 213.5 98.25 202.125C115 153.25 153.25 115 202.125 98.25C213.5 116.125 233.25 128 256 128S298.5 116.125 309.875 98.25C358.75 115 397 153.25 413.75 202.125C395.875 213.5 384 233.25 384 256S395.875 298.5 413.75 309.875C397 358.75 358.75 397 309.875 413.75Z" })
  }
));
DrawCircleRegular.displayName = "DrawCircleRegular";
var DrawCircle_default = DrawCircleRegular;
