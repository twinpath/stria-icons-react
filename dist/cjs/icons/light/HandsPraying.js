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
var HandsPraying_exports = {};
__export(HandsPraying_exports, {
  default: () => HandsPraying_default
});
module.exports = __toCommonJS(HandsPraying_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandsPrayingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 496C640 488.847 635.258 482.56 628.38 480.595L394.375 411.124C359.875 401.374 336 369.999 336 334.124V248C336 234.75 346.75 224 360 224S384 234.75 384 248V303.999C384 312.799 391.2 319.999 400 319.999H400C408.8 319.999 416 312.799 416 303.999V227.875C416 211.125 411.625 194.75 403.375 180.25L339.125 67.875C332.625 56.375 336.625 41.75 348.125 35.125C359.125 28.875 374 32 380.875 44.125L467.375 195.5C475.625 210 480 226.375 480 243.125V309.624C480 323.749 489.125 336.124 502.625 340.249L619.165 379.099C629.489 382.351 640 374.641 640 363.817V363.799C640 356.803 635.46 350.616 628.787 348.516L512 309.624V243.125C512 220.875 506.25 199 495.125 179.625L408.625 28.25C398.75 10.875 380.125 0 360 0C345.25 0 330.75 6 320 17C309.25 6 294.75 0 280 0C259.875 0 241.25 10.875 231.375 28.25L144.875 179.625C133.75 199 128 220.875 128 243.125V309.624L11.213 348.516C4.54 350.616 0 356.803 0 363.799V363.817C0 374.641 10.511 382.351 20.835 379.099L137.375 340.249C150.875 336.124 160 323.749 160 309.624V243.125C160 226.375 164.375 210 172.625 195.5L259.125 44.125C266.125 32 281 29 291.875 35.125C303.375 41.75 307.375 56.375 300.875 67.875L236.625 180.25C228.375 194.75 224 211.125 224 227.875V303.999C224 312.799 231.2 319.999 240 319.999H240C248.8 319.999 256 312.799 256 303.999V248C256 234.75 266.75 224 280 224S304 234.75 304 248V334.124C304 369.999 280.125 401.374 245.625 411.124L11.62 480.595C4.742 482.56 0 488.847 0 496V496C0 506.648 10.194 514.333 20.43 511.403L254.25 441.874C282.625 433.999 305.625 415.249 320 391.249C334.375 415.249 357.375 433.999 385.75 441.874L619.57 511.403C629.806 514.333 640 506.648 640 496V496ZM320 210.25C311.25 200.5 299.5 193.75 285.875 192.25C278.875 191.625 272.125 192.125 265.75 193.875L320 98.875L374.25 193.875C367.875 192.125 361.125 191.625 354.125 192.25C340.5 193.75 328.75 200.5 320 210.25Z" })
  }
));
HandsPrayingLight.displayName = "HandsPrayingLight";
var HandsPraying_default = HandsPrayingLight;
