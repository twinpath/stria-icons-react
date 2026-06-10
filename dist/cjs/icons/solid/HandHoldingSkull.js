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
var HandHoldingSkull_exports = {};
__export(HandHoldingSkull_exports, {
  default: () => HandHoldingSkull_default
});
module.exports = __toCommonJS(HandHoldingSkull_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandHoldingSkullSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568.197 336.312C555.072 318.5 530.059 314.656 512.264 327.844L392.592 416.016H271.98C263.232 416.016 255.982 408.766 255.982 400.023C255.982 391.273 263.232 384.023 271.98 384.023H350.227C366.225 384.023 380.975 373.148 383.598 357.406C386.848 337.406 371.475 320.031 351.977 320.031H191.986C164.988 320.031 138.865 329.281 117.867 346.281L71.369 384.023H15.998C7.25 384.023 0 391.273 0 400.023V496C0 504.75 7.25 512 15.998 512H362.977C385.006 512 406.896 504.812 424.676 491.727L559.729 392.211C577.51 379.117 581.305 354.094 568.197 336.312ZM213.988 237.25L208.488 263.125C205.863 275.75 213.988 288 224.99 288H351.01C362.137 288 370.139 275.75 367.514 263.125L362.012 237.25C403.77 214.875 432.023 174.5 432.023 128C432.023 57.25 367.514 0 288 0C208.488 0 143.979 57.25 143.979 128C143.979 174.5 172.232 214.875 213.988 237.25ZM344.01 112.008C361.637 112.008 376.014 126.383 376.014 144.01C376.014 161.635 361.637 176.012 344.01 176.012C326.381 176.012 312.004 161.635 312.004 144.01C312.004 126.383 326.381 112.008 344.01 112.008ZM231.992 112.008C249.619 112.008 263.996 126.383 263.996 144.01C263.996 161.635 249.619 176.012 231.992 176.012C214.363 176.012 199.986 161.635 199.986 144.01C199.986 126.383 214.363 112.008 231.992 112.008Z" })
  }
));
HandHoldingSkullSolid.displayName = "HandHoldingSkullSolid";
var HandHoldingSkull_default = HandHoldingSkullSolid;
