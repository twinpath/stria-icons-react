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
var Stomach_exports = {};
__export(Stomach_exports, {
  default: () => Stomach_default
});
module.exports = __toCommonJS(Stomach_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StomachThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 95.999C327.402 95.999 279.938 132.978 263.039 183.902C210.553 183.373 168 140.609 168 87.999V7.999C168 3.593 164.406 -0.001 160 -0.001S152 3.593 152 7.999V87.999C152 147.857 199.336 196.492 258.475 199.441C256.926 207.4 256 215.588 256 224V287.994C256 323.369 227.375 351.995 192 351.995H128C57.25 351.995 0 409.243 0 479.993V495.993C0 504.868 7.125 511.991 16 511.991H48C56.875 511.991 64 504.868 64 495.993V479.993C64 442.368 98 428.743 117.875 428.743C135 428.743 147.5 435.493 159 446.993C222.031 510.022 288.686 511.999 305.652 511.999C306.789 511.999 307.701 511.991 308.375 511.991C420.875 511.991 512 420.868 512 308.369V224C512 153.306 454.693 95.999 384 95.999ZM384 111.999C445.758 111.999 496 162.242 496 224V308.369C496 316.194 495.365 323.862 494.43 331.438C458.053 343.159 419.631 330.971 393.656 299C361.914 260.059 315.912 246.871 272 262.773V224C272 162.242 322.242 111.999 384 111.999ZM307.281 495.995L305.652 496.001C277.637 496.001 222.799 488.163 170.314 435.678C154.666 420.03 138.002 412.743 117.875 412.743C88.861 412.743 48 433.608 48 479.993V495.991L16 495.993V479.993C16 418.237 66.242 367.995 128 367.995H192C236.111 367.995 272 332.106 272 287.994V279.695C311.002 263.01 352.756 274.109 381.219 309.094C403.875 336.969 434.812 352 466.906 352C475.08 352 483.314 350.655 491.523 348.676C473 432.807 397.84 495.991 307.281 495.995Z" })
  }
));
StomachThin.displayName = "StomachThin";
var Stomach_default = StomachThin;
