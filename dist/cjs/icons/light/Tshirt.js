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
var Tshirt_exports = {};
__export(Tshirt_exports, {
  default: () => Tshirt_default
});
module.exports = __toCommonJS(Tshirt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TshirtLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M637.66 118.375C633.722 106.625 625.425 97.156 614.3 91.688L438.003 1.75C430.972 -1.875 422.456 0.219 417.847 6.531C401.238 29.125 361.941 44.313 320.003 44.313C278.128 44.313 238.831 29.125 222.222 6.531C217.597 0.219 209.035 -1.875 202.066 1.75L25.91 91.625C14.706 97.094 6.363 106.594 2.41 118.375C-1.512 130.062 -0.606 142.562 4.831 153.25L53.456 254.125C64.831 276.563 92.581 285.875 114.566 275.156L160.113 255.781L160.035 466C160.035 491.375 180.847 512 206.425 512H433.644C459.222 512 480.035 491.375 480.035 466L479.956 255.75L524.8 274.844C547.519 285.75 575.253 276.562 586.738 253.844L635.097 153.562C640.675 142.562 641.581 130.062 637.66 118.375ZM606.425 139.375L558.05 239.688C554.519 246.625 545.831 249.438 538.035 245.719L470.206 216.844C465.253 214.781 459.581 215.25 455.113 218.219C450.628 221.187 447.941 226.187 447.941 231.562L448.035 466C448.035 473.719 441.581 480 433.644 480H206.425C198.488 480 192.035 473.719 192.035 466L192.128 231.562C192.128 226.187 189.441 221.187 184.956 218.219C182.3 216.469 179.222 215.562 176.128 215.562C174.003 215.562 171.878 216 169.863 216.844L101.331 246.031C94.269 249.469 85.535 246.625 82.144 239.969L33.503 139.062C31.847 135.781 31.581 132.062 32.753 128.531C33.956 124.969 36.519 122.062 40.191 120.25L205.456 35.937C230.597 61.094 273.035 76.312 320.066 76.312C367.035 76.312 409.472 61.094 434.613 35.937L599.878 120.25C599.956 120.281 600.035 120.344 600.128 120.375C603.55 122.063 606.113 124.969 607.316 128.531C608.488 132.062 608.222 135.781 606.425 139.375Z" })
  }
));
TshirtLight.displayName = "TshirtLight";
var Tshirt_default = TshirtLight;
