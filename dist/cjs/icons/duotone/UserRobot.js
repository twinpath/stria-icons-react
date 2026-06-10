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
var UserRobot_exports = {};
__export(UserRobot_exports, {
  default: () => UserRobot_default
});
module.exports = __toCommonJS(UserRobot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserRobotDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 272H240V240H208V272ZM176 448C167.125 448 160 455.125 160 464V512H192V464C192 455.125 184.875 448 176 448ZM176 240H144V272H176V240ZM37.25 133.25C33.875 136.625 32 141.25 32 146V238C32 242.75 33.875 247.375 37.25 250.75S45.25 256 50 256H80V128H50C45.25 128 40.625 129.875 37.25 133.25ZM410.75 133.25C407.375 129.875 402.75 128 398 128H368V256H398C402.75 256 407.375 254.125 410.75 250.75S416 242.75 416 238V146C416 141.25 414.125 136.625 410.75 133.25ZM272 448C263.125 448 256 455.125 256 464S263.125 480 272 480S288 472.875 288 464S280.875 448 272 448ZM272 272H304V240H272V272ZM224 0C215.164 0 208 7.162 208 16V64H240V16C240 7.162 232.836 0 224 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 352H96C43 352 0 395 0 448V480C0 497.625 14.375 512 32 512H128V448C128 430.375 142.375 416 160 416H288C305.625 416 320 430.375 320 448V512H416C433.625 512 448 497.625 448 480V448C448 395 405 352 352 352ZM116 320H332C351.875 320 368 303.875 368 284V109C368 84.125 347.875 64 323 64H125C100.125 64 80 84.125 80 109V284C80 303.875 96.125 320 116 320ZM304 272H272V240H304V272ZM288 128C305.625 128 320 142.375 320 160S305.625 192 288 192S256 177.625 256 160S270.375 128 288 128ZM208 240H240V272H208V240ZM176 272H144V240H176V272ZM160 128C177.625 128 192 142.375 192 160S177.625 192 160 192S128 177.625 128 160S142.375 128 160 128Z" })
    ]
  }
));
UserRobotDuotone.displayName = "UserRobotDuotone";
var UserRobot_default = UserRobotDuotone;
