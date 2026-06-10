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
var HandHoldingDroplet_exports = {};
__export(HandHoldingDroplet_exports, {
  default: () => HandHoldingDroplet_default
});
module.exports = __toCommonJS(HandHoldingDroplet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandHoldingDropletThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.976 256C340.974 256 383.973 213.875 383.973 162C383.973 122 326.85 41.25 300.726 6.375C297.538 2.125 292.757 0 287.976 0S278.414 2.125 275.227 6.375C249.103 41.25 191.98 122 191.98 162C191.98 213.875 234.978 256 287.976 256ZM287.951 16.008C337.314 81.914 367.974 137.848 367.974 162C367.974 205.008 332.086 240 287.976 240S207.979 205.008 207.979 162C207.979 137.844 238.654 81.891 287.951 16.008ZM566.621 323.562C558.981 313.187 547.778 306.438 535.075 304.531C522.31 302.531 509.763 305.781 499.498 313.406L381.955 400H263.975C259.632 400 255.975 396.344 255.975 392.031C255.975 387.688 259.632 384.031 263.975 384.031H342.207C362.565 384.031 380.299 369.719 383.471 350.688C385.377 338.969 382.112 327.094 374.487 318.156C366.862 309.188 355.722 304.031 343.957 304.031H183.978C155.26 304.031 127.152 314 104.824 332.063L60.529 368.031H8C3.578 368.031 0 371.625 0 376.031S3.578 384.031 8 384.031H66.216L114.902 344.5C134.386 328.719 158.916 320.031 183.978 320.031H343.957C351.035 320.031 357.722 323.125 362.3 328.5C366.94 333.969 368.847 340.938 367.69 348.094C365.8 359.469 354.847 368.031 342.207 368.031H263.975C250.741 368.031 239.976 378.813 239.976 392.031S250.741 416 263.975 416H387.205L509.013 326.281C515.873 321.188 524.326 319.188 532.7 320.344C541.169 321.625 548.637 326.125 553.746 333.062C558.809 339.938 560.902 348.375 559.621 356.812C558.34 365.281 553.856 372.719 546.965 377.781L411.908 477.281C395.517 489.344 375.284 496 354.956 496H8C3.578 496 0 499.594 0 504S3.578 512 8 512H354.956C378.674 512 402.283 504.25 421.407 490.156L556.465 390.656C566.777 383.062 573.527 371.906 575.449 359.219C577.37 346.562 574.23 333.875 566.621 323.562Z" })
  }
));
HandHoldingDropletThin.displayName = "HandHoldingDropletThin";
var HandHoldingDroplet_default = HandHoldingDropletThin;
