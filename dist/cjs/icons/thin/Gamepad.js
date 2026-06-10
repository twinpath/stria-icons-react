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
var Gamepad_exports = {};
__export(Gamepad_exports, {
  default: () => Gamepad_default
});
module.exports = __toCommonJS(Gamepad_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GamepadThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M495.91 168.008C473.822 168.008 455.916 185.918 455.916 208.008C455.916 230.094 473.822 248.004 495.91 248.004S535.902 230.094 535.902 208.008C535.902 185.918 517.998 168.008 495.91 168.008ZM495.91 232.008C482.678 232.008 471.914 221.242 471.914 208.008S482.678 184.008 495.91 184.008S519.906 194.773 519.906 208.008S509.143 232.008 495.91 232.008ZM223.961 248.004H167.971V192.008C167.971 187.602 164.379 184.008 159.973 184.008S151.975 187.602 151.975 192.008V248.004H95.984C91.578 248.004 87.984 251.598 87.984 256.004S91.578 264 95.984 264H151.975V320C151.975 324.406 155.566 328 159.973 328S167.971 324.406 167.971 320V264H223.961C228.367 264 231.961 260.41 231.961 256.004S228.367 248.004 223.961 248.004ZM431.92 264C409.832 264 391.928 281.914 391.928 304S409.832 343.996 431.92 343.996S471.914 326.086 471.914 304S454.008 264 431.92 264ZM431.92 328C418.689 328 407.924 317.234 407.924 304S418.689 280 431.92 280C445.152 280 455.916 290.766 455.916 304S445.152 328 431.92 328ZM448 64H192C85.961 64 0 149.961 0 256S85.961 448 192 448H448C554.039 448 640 362.039 640 256S554.039 64 448 64ZM448 432H192C94.953 432 16 353.047 16 256S94.953 80 192 80H448C545.047 80 624 158.953 624 256S545.047 432 448 432Z" })
  }
));
GamepadThin.displayName = "GamepadThin";
var Gamepad_default = GamepadThin;
