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
var SquareThisWayUp_exports = {};
__export(SquareThisWayUp_exports, {
  default: () => SquareThisWayUp_default
});
module.exports = __toCommonJS(SquareThisWayUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareThisWayUpRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM400 416C400 424.82 392.822 432 384 432H64C55.178 432 48 424.82 48 416V96C48 87.18 55.178 80 64 80H384C392.822 80 400 87.18 400 96V416ZM336 368H112C103.156 368 96 375.156 96 384S103.156 400 112 400H336C344.844 400 352 392.844 352 384S344.844 368 336 368ZM120 296C120 309.25 130.75 320 144 320S168 309.25 168 296V192H193.777C201.639 192 208 185.639 208 177.777C208 174.027 206.555 170.611 204.166 168.068C201.139 164.707 154.639 111.527 154.639 111.527C149.25 105.359 138.666 105.359 133.223 111.527L83.5 168.416C79.832 172.625 78.971 178.582 81.277 183.652C83.582 188.736 88.639 192 94.221 192H120V296ZM314.639 111.527C309.25 105.359 298.666 105.359 293.223 111.527L243.5 168.416C239.832 172.625 238.971 178.582 241.277 183.652C243.582 188.736 248.639 192 254.221 192H280V296C280 309.25 290.75 320 304 320S328 309.25 328 296V192H353.777C361.639 192 368 185.639 368 177.777C368 174.027 366.555 170.611 364.166 168.068C361.139 164.707 314.639 111.527 314.639 111.527Z" })
  }
));
SquareThisWayUpRegular.displayName = "SquareThisWayUpRegular";
var SquareThisWayUp_default = SquareThisWayUpRegular;
