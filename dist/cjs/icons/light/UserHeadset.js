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
var UserHeadset_exports = {};
__export(UserHeadset_exports, {
  default: () => UserHeadset_default
});
module.exports = __toCommonJS(UserHeadset_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserHeadsetLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.682 96H224.32C262.068 96 296.293 118.098 311.75 152.625C327.125 187.25 320.625 227.75 295.25 255.75C295.25 255.875 295.375 255.875 295.375 256H304C320.5 256 335.875 247.375 344.5 233.375C349 220.375 352 206.625 352 192C352 121.25 294.75 64 224 64S96 121.25 96 192C96 232.375 115.125 268 144.375 291.5C144.25 290.25 144 289.25 144 288C144.125 276.75 147.125 265.625 152.875 256C127.375 228 120.75 187.5 136.125 152.75C151.582 118.223 185.809 96 223.682 96ZM48 224C56.875 224 64 216.875 64 208V192C64 103.75 135.75 32 224 32S384 103.75 384 192V208C384 252.125 348.125 288 304 288H272C272 270.375 257.625 256 240 256H208C190.375 256 176 270.375 176 288S190.375 320 208 320H304C365.875 319.875 415.875 269.875 416 208V192C416 86.125 329.875 0 224 0S32 86.125 32 192V208C32 216.875 39.125 224 48 224ZM314.664 352H133.336C59.699 352 0 411.695 0 485.332C0 500.059 11.941 512 26.664 512H421.336C436.059 512 448 500.059 448 485.332C448 411.695 388.307 352 314.664 352ZM32.139 480C34.918 426.592 79.246 384 133.336 384H314.664C368.754 384 413.082 426.592 415.861 480H32.139Z" })
  }
));
UserHeadsetLight.displayName = "UserHeadsetLight";
var UserHeadset_default = UserHeadsetLight;
