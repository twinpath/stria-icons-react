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
const ClarinetRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 231.995C258.75 231.995 248 242.744 248 255.994C248 269.243 258.75 279.993 272 279.993S296 269.243 296 255.994C296 242.744 285.25 231.995 272 231.995ZM368 231.995C354.75 231.995 344 242.744 344 255.994C344 269.243 354.75 279.993 368 279.993S392 269.243 392 255.994C392 242.744 381.25 231.995 368 231.995ZM616 111.999C611.25 111.999 606.625 113.374 602.75 115.999L536.75 159.998H480V127.999H496C504.8 127.999 512 120.799 512 111.999V111.999C512 103.2 504.8 96 496 96H240C231.2 96 224 103.2 224 111.999V111.999C224 120.799 231.2 127.999 240 127.999H256V159.998H106.394C99.503 159.998 92.658 161.11 86.122 163.293L21.875 184.747C8.81 189.109 0 201.339 0 215.113V296.875C0 310.649 8.81 322.879 21.875 327.241L86.122 348.695C92.658 350.878 99.503 351.99 106.394 351.99H536.75L602.75 395.989C610.125 400.863 619.5 401.363 627.375 397.114C635.125 392.989 640 384.864 640 375.989V135.998C640 122.749 629.25 111.999 616 111.999ZM384 127.999H448V159.998H384V127.999ZM288 127.999H352V159.998H288V127.999ZM592 331.116L551.25 303.992H103.75L48 285.368V226.62L103.75 207.996H551.25L592 180.872V331.116ZM464 231.995C450.75 231.995 440 242.744 440 255.994C440 269.243 450.75 279.993 464 279.993S488 269.243 488 255.994C488 242.744 477.25 231.995 464 231.995Z" })
  }
));
ClarinetRegular.displayName = "ClarinetRegular";
var Clarinet_default = ClarinetRegular;
