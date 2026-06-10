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
var RectangleAd_exports = {};
__export(RectangleAd_exports, {
  default: () => RectangleAd_default
});
module.exports = __toCommonJS(RectangleAd_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RectangleAdThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32.001H64C28.654 32.001 0 60.653 0 96.001V416.001C0 451.346 28.654 480.001 64 480.001H512C547.348 480.001 576 451.346 576 416.001V96.001C576 60.653 547.348 32.001 512 32.001ZM560 416.001C560 442.468 538.467 464.001 512 464.001H64C37.533 464.001 16 442.468 16 416.001V96.001C16 69.534 37.533 48.001 64 48.001H512C538.467 48.001 560 69.534 560 96.001V416.001ZM198.953 164.423C197.594 161.704 194.828 160.001 191.797 160.001S185.984 161.719 184.641 164.423L96.844 340.423C94.875 344.376 96.469 349.188 100.422 351.157C101.578 351.735 102.797 352.001 104 352.001C106.938 352.001 109.766 350.376 111.156 347.579L140.877 288.001H242.986L272.844 347.579C274.844 351.548 279.656 353.141 283.578 351.157C287.531 349.173 289.125 344.36 287.156 340.423L198.953 164.423ZM148.857 272.001L191.812 185.891L234.967 272.001H148.857ZM440 160.001C435.578 160.001 432 163.579 432 168.001V240.708C419.518 225.741 400.971 216.001 380 216.001C342.5 216.001 312 246.501 312 284.001S342.5 352.001 380 352.001C400.971 352.001 419.518 342.26 432 327.294V344.001C432 348.423 435.578 352.001 440 352.001S448 348.423 448 344.001V168.001C448 163.579 444.422 160.001 440 160.001ZM380 336.001C351.328 336.001 328 312.673 328 284.001S351.328 232.001 380 232.001S432 255.329 432 284.001S408.672 336.001 380 336.001Z" })
  }
));
RectangleAdThin.displayName = "RectangleAdThin";
var RectangleAd_default = RectangleAdThin;
