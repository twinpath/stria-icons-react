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
var CircleTrash_exports = {};
__export(CircleTrash_exports, {
  default: () => CircleTrash_default
});
module.exports = __toCommonJS(CircleTrash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleTrashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM336.422 176.016C332.203 175.844 328.25 179.172 328.016 183.578L319.188 348.75C318.797 354.844 313.312 360 307.219 360H204.781C198.688 360 193.203 354.844 192.813 348.828L183.984 183.578C183.766 179.172 180.109 175.906 175.578 176.016C171.156 176.25 167.781 180.016 168.016 184.422L176.844 349.75C177.766 364.234 190.297 376 204.781 376H307.219C321.703 376 334.234 364.234 335.156 349.672L343.984 184.422C344.219 180.016 340.844 176.25 336.422 176.016ZM352 144H308.945L295.156 116.422C293.797 113.719 291.031 112 288 112H224C220.969 112 218.203 113.719 216.844 116.422L203.055 144H160C155.578 144 152 147.578 152 152S155.578 160 160 160H352C356.422 160 360 156.422 360 152S356.422 144 352 144ZM220.941 144L228.938 128H283.062L291.059 144H220.941Z" })
  }
));
CircleTrashThin.displayName = "CircleTrashThin";
var CircleTrash_default = CircleTrashThin;
