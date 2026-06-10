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
var SquareDownLeft_exports = {};
__export(SquareDownLeft_exports, {
  default: () => SquareDownLeft_default
});
module.exports = __toCommonJS(SquareDownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareDownLeftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM325.824 222.059L257.941 289.941L303.195 335.195C307.77 339.77 309.15 346.652 306.666 352.633C304.189 358.617 298.357 362.508 291.883 362.508H133.49C124.655 362.508 117.492 355.345 117.492 346.51V188.117C117.492 181.641 121.381 175.809 127.369 173.336C133.348 170.848 140.23 172.227 144.805 176.805L190.059 222.059L257.941 154.176C270.438 141.679 290.699 141.679 303.196 154.176L325.824 176.804C338.321 189.301 338.321 209.562 325.824 222.059Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M330.988 216.402L257.449 289.941L302.703 335.195C307.277 339.77 308.658 346.652 306.174 352.633C303.697 358.617 297.865 362.508 291.391 362.508H132.998C124.162 362.508 117 355.344 117 346.508V188.117C117 181.641 120.889 175.809 126.877 173.336C132.855 170.848 139.738 172.227 144.312 176.805L189.566 222.059L263.105 148.52C272.479 139.148 287.674 139.148 297.047 148.52L330.988 182.461C340.361 191.832 340.361 207.031 330.988 216.402Z" })
    ]
  }
));
SquareDownLeftDuotone.displayName = "SquareDownLeftDuotone";
var SquareDownLeft_default = SquareDownLeftDuotone;
