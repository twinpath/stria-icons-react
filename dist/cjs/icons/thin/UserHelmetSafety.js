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
var UserHelmetSafety_exports = {};
__export(UserHelmetSafety_exports, {
  default: () => UserHelmetSafety_default
});
module.exports = __toCommonJS(UserHelmetSafety_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserHelmetSafetyThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96.766 135.875C97.266 135.969 97.766 136 98.266 136C102.031 136 105.375 133.344 106.109 129.5C114.059 87.58 144.199 53.279 184 39.145V128C184 132.406 187.578 136 192 136S200 132.406 200 128V24C200 19.594 203.594 16 208 16H240C244.406 16 248 19.594 248 24V128C248 132.406 251.578 136 256 136S264 132.406 264 128V39.145C303.801 53.279 333.941 87.58 341.891 129.5C342.625 133.344 345.969 136 349.734 136C350.234 136 350.734 135.969 351.234 135.875C355.578 135.031 358.438 130.844 357.609 126.5C348.217 76.994 311.553 36.812 263.631 22.174C262.646 9.848 252.586 0 240 0H208C195.414 0 185.354 9.848 184.369 22.174C136.447 36.812 99.783 76.994 90.391 126.5C89.562 130.844 92.422 135.031 96.766 135.875ZM88 176H360C364.422 176 368 172.406 368 168S364.422 160 360 160H88C83.578 160 80 163.594 80 168S83.578 176 88 176ZM341.027 208C337.186 208 334.012 210.781 333.236 214.547C322.754 265.477 277.99 304 224 304C170.012 304 125.246 265.477 114.764 214.547C113.99 210.781 110.814 208 106.973 208C101.914 208 98.189 212.678 99.201 217.635C111.09 275.969 162.156 320 224 320C285.854 320 336.912 275.969 348.801 217.635C349.811 212.678 346.088 208 341.029 208H341.027ZM314.664 352H133.336C59.699 352 0 411.695 0 485.332C0 500.059 11.941 512 26.664 512H421.336C436.059 512 448 500.059 448 485.332C448 411.695 388.307 352 314.664 352ZM421.336 496H26.664C20.783 496 16 491.215 16 485.332C16 420.635 68.637 368 133.336 368H314.664C379.363 368 432 420.635 432 485.332C432 491.215 427.217 496 421.336 496Z" })
  }
));
UserHelmetSafetyThin.displayName = "UserHelmetSafetyThin";
var UserHelmetSafety_default = UserHelmetSafetyThin;
