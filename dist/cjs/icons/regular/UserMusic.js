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
var UserMusic_exports = {};
__export(UserMusic_exports, {
  default: () => UserMusic_default
});
module.exports = __toCommonJS(UserMusic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserMusicRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 256C294.693 256 352 198.691 352 128C352 57.307 294.693 0 224 0S96 57.307 96 128C96 198.691 153.307 256 224 256ZM224 48C268.111 48 304 83.887 304 128C304 172.111 268.111 208 224 208S144 172.111 144 128C144 83.887 179.889 48 224 48ZM323.6 464H48.994C56.895 400.945 110.84 352 176 352H272C299.908 352 325.455 361.367 346.512 376.586C357.658 364.734 371.844 355.102 388.309 348.148C357.281 320.756 316.645 304 272 304H176C78.797 304 0 382.797 0 480C0 497.672 14.326 512 32 512H355.193C339.818 498.9 328.807 482.482 323.6 464ZM601.725 160.631L505.725 179.832C490.768 182.824 480 195.957 480 211.211V372.408C469.945 369.727 459.281 368 448 368C394.98 368 352 400.234 352 440C352 479.764 394.98 512 448 512S544 479.764 544 440V300.176L614.275 286.121C629.232 283.131 640 269.996 640 254.742V192.01C640 171.816 621.525 156.672 601.725 160.631Z" })
  }
));
UserMusicRegular.displayName = "UserMusicRegular";
var UserMusic_default = UserMusicRegular;
