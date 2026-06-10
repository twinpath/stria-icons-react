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
var UserTag_exports = {};
__export(UserTag_exports, {
  default: () => UserTag_default
});
module.exports = __toCommonJS(UserTag_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserTagThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM224 16C285.758 16 336 66.242 336 128S285.758 240 224 240S112 189.758 112 128S162.242 16 224 16ZM416 496H41.438C27.406 496 16 485.219 16 472C16 388.188 87.406 320 175.156 320H272.844C299.156 320 325.281 326.281 348.344 338.156C352.188 340.094 357.062 338.594 359.125 334.688C361.125 330.75 359.594 325.938 355.656 323.906C330.344 310.875 301.688 304 272.844 304H175.156C78.562 304 0 379.375 0 472C0 494.062 18.594 512 41.438 512H416C420.406 512 424 508.406 424 504S420.406 496 416 496ZM630.648 364.875L540.357 274.75C528.367 262.75 512.133 256 495.148 256H415.971C398.236 256 384 270.25 384 288V367.25C384 384.25 390.619 400.375 402.607 412.375L492.9 502.625C499.145 508.875 507.324 512 515.504 512C523.686 512 531.865 508.875 538.109 502.625L630.523 410.125C643.137 397.625 643.137 377.375 630.648 364.875ZM619.205 398.816L526.791 491.316C523.773 494.336 519.766 496 515.506 496C511.244 496 507.236 494.336 504.211 491.309L413.928 401.066C404.945 392.076 400 380.066 400 367.25V288C400 279.027 407.016 272 415.971 272H495.148C507.945 272 519.98 276.992 529.055 286.074L619.33 376.184C622.352 379.207 624.01 383.219 624 387.479C623.988 391.736 622.305 395.742 619.205 398.816ZM448 304C439.166 304 432 311.166 432 320C432 328.916 439.166 336 448 336C456.916 336 464 328.832 464 320C464 311.166 456.916 304 448 304Z" })
  }
));
UserTagThin.displayName = "UserTagThin";
var UserTag_default = UserTagThin;
