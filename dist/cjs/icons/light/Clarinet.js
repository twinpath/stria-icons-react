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
var Clarinet_exports = {};
__export(Clarinet_exports, {
  default: () => Clarinet_default
});
module.exports = __toCommonJS(Clarinet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClarinetLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 231.994C258.75 231.994 248 242.744 248 255.994C248 269.242 258.75 279.992 272 279.992S296 269.242 296 255.994C296 242.744 285.25 231.994 272 231.994ZM616 111.998C611.25 111.998 606.625 113.373 602.75 115.998L536.75 159.998H480V127.998H496C504.801 127.998 512 120.799 512 111.998C512 103.199 504.801 96 496 96H240C231.199 96 224 103.199 224 111.998C224 120.799 231.199 127.998 240 127.998H256V159.998H101.25C97.75 159.998 94.375 160.498 91.125 161.621L21.764 184.783C8.766 189.123 0 201.291 0 214.994V296.875C0 310.648 8.811 322.879 21.875 327.24L91.125 350.365C94.375 351.49 97.75 351.99 101.25 351.99H536.75L602.75 395.988C610.125 400.863 619.5 401.363 627.375 397.113C635.125 392.988 640 384.863 640 375.988V135.998C640 122.748 629.25 111.998 616 111.998ZM384 127.998H448V159.998H384V127.998ZM288 127.998H352V159.998H288V127.998ZM608 360.99L546.375 319.99H101.25L32 296.992V214.994L101.25 191.996H546.375L608 150.998V360.99ZM368 231.994C354.75 231.994 344 242.744 344 255.994C344 269.242 354.75 279.992 368 279.992S392 269.242 392 255.994C392 242.744 381.25 231.994 368 231.994ZM464 231.994C450.75 231.994 440 242.744 440 255.994C440 269.242 450.75 279.992 464 279.992S488 269.242 488 255.994C488 242.744 477.25 231.994 464 231.994Z" })
  }
));
ClarinetLight.displayName = "ClarinetLight";
var Clarinet_default = ClarinetLight;
