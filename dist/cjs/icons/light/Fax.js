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
var Fax_exports = {};
__export(Fax_exports, {
  default: () => Fax_default
});
module.exports = __toCommonJS(Fax_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaxLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 192H176C170.359 192 165.027 193.15 160 194.938V64C160 46.326 174.326 32 192 32H409.375L448 70.625V144C448 152.836 455.164 160 464 160S480 152.836 480 144V70.633C480 62.143 476.627 54.002 470.625 48L432 9.375C425.998 3.371 417.855 0 409.367 0H192C156.654 0 128 28.652 128 64V130.938C122.973 129.15 117.641 128 112 128H48C21.49 128 0 149.49 0 176V464C0 490.51 21.49 512 48 512H112C124.35 512 135.494 507.205 144 499.543C152.506 507.205 163.65 512 176 512H464C490.51 512 512 490.51 512 464V240C512 213.49 490.51 192 464 192ZM128 464C128 472.822 120.822 480 112 480H48C39.178 480 32 472.822 32 464V176C32 167.178 39.178 160 48 160H112C120.822 160 128 167.178 128 176V464ZM480 464C480 472.822 472.822 480 464 480H176C167.178 480 160 472.822 160 464V240C160 231.178 167.178 224 176 224H464C472.822 224 480 231.178 480 240V464ZM272 280C258.688 280 248 290.688 248 304S258.688 328 272 328S296 317.312 296 304S285.312 280 272 280ZM272 376C258.688 376 248 386.688 248 400S258.688 424 272 424S296 413.312 296 400S285.312 376 272 376ZM368 280C354.688 280 344 290.688 344 304S354.688 328 368 328S392 317.312 392 304S381.312 280 368 280ZM368 376C354.688 376 344 386.688 344 400S354.688 424 368 424S392 413.312 392 400S381.312 376 368 376Z" })
  }
));
FaxLight.displayName = "FaxLight";
var Fax_default = FaxLight;
